"""
Invoice PDF Generation Service
Generates professional invoices for verified orders.
"""
from io import BytesIO
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_RIGHT, TA_CENTER, TA_LEFT
from reportlab.pdfgen import canvas


class InvoiceGenerator:
    """Generate professional PDF invoices for orders."""
    
    def __init__(self):
        self.width, self.height = A4
        self.styles = getSampleStyleSheet()
        self._setup_custom_styles()
    
    def _setup_custom_styles(self):
        """Setup custom paragraph styles for invoice."""
        # Company name style
        self.styles.add(ParagraphStyle(
            name='CompanyName',
            parent=self.styles['Heading1'],
            fontSize=24,
            textColor=colors.HexColor('#6D74FF'),
            spaceAfter=6,
            alignment=TA_LEFT
        ))
        
        # Invoice title style
        self.styles.add(ParagraphStyle(
            name='InvoiceTitle',
            parent=self.styles['Heading1'],
            fontSize=28,
            textColor=colors.HexColor('#1a1a1a'),
            spaceAfter=12,
            alignment=TA_RIGHT
        ))
        
        # Section heading
        self.styles.add(ParagraphStyle(
            name='SectionHeading',
            parent=self.styles['Heading2'],
            fontSize=12,
            textColor=colors.HexColor('#4a5568'),
            spaceAfter=8,
            spaceBefore=12
        ))
        
        # Normal text right aligned
        self.styles.add(ParagraphStyle(
            name='NormalRight',
            parent=self.styles['Normal'],
            alignment=TA_RIGHT
        ))

        # Table header
        self.styles.add(ParagraphStyle(
            name='TableHeader',
            parent=self.styles['Normal'],
            fontSize=11,
            textColor=colors.whitesmoke,
            alignment=TA_LEFT,
            spaceAfter=6,
            leading=12
        ))

        # Table cell (left)
        self.styles.add(ParagraphStyle(
            name='TableCell',
            parent=self.styles['Normal'],
            fontSize=10,
            alignment=TA_LEFT,
            leading=12
        ))

        # Table cell (right aligned)
        self.styles.add(ParagraphStyle(
            name='TableCellRight',
            parent=self.styles['Normal'],
            fontSize=10,
            alignment=TA_RIGHT,
            leading=12
        ))
    
    def generate_invoice(self, order_data: dict) -> BytesIO:
        """
        Generate PDF invoice from order data.
        
        Args:
            order_data: Dictionary containing order information
            
        Returns:
            BytesIO: PDF file buffer
        """
        buffer = BytesIO()
        doc = SimpleDocTemplate(
            buffer,
            pagesize=A4,
            rightMargin=20*mm,
            leftMargin=20*mm,
            topMargin=20*mm,
            bottomMargin=20*mm
        )
        
        # Build the invoice content
        story = []
        
        # Header section
        story.extend(self._build_header(order_data))
        story.append(Spacer(1, 12*mm))
        
        # Customer and order info
        story.extend(self._build_info_section(order_data))
        story.append(Spacer(1, 8*mm))
        
        # Items table
        story.extend(self._build_items_table(order_data))
        story.append(Spacer(1, 8*mm))
        
        # Payment info
        story.extend(self._build_payment_info(order_data))
        story.append(Spacer(1, 12*mm))
        
        # Footer
        story.extend(self._build_footer())
        
        # Build PDF
        doc.build(story, onFirstPage=self._add_page_decoration)
        
        buffer.seek(0)
        return buffer
    
    def _build_header(self, order_data: dict):
        """Build invoice header with company info and invoice title."""
        elements = []
        
        # Company info (left) and Invoice title (right) in a table
        header_data = [
            [
                Paragraph('<b>E-Commerce Store</b>', self.styles['CompanyName']),
                Paragraph('<b>INVOICE</b>', self.styles['InvoiceTitle'])
            ],
            [
                Paragraph('Puttalam, Sri Lanka<br/>contact@ecommerce.lk<br/>+94 76 897 6222', self.styles['Normal']),
                Paragraph(f"<b>Invoice #:</b> {order_data.get('id', 'N/A')[-8:]}<br/>"
                         f"<b>Date:</b> {self._format_date(order_data.get('created_at'))}<br/>"
                         f"<b>Status:</b> <font color='green'>PAID</font>",
                         self.styles['NormalRight'])
            ]
        ]
        
        header_table = Table(header_data, colWidths=[90*mm, 80*mm])
        header_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('ALIGN', (0, 0), (0, -1), 'LEFT'),
            ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ]))
        
        elements.append(header_table)
        
        # Horizontal line
        elements.append(Spacer(1, 3*mm))
        elements.append(self._create_line())
        
        return elements
    
    def _build_info_section(self, order_data: dict):
        """Build customer and shipping information section."""
        elements = []
        
        customer_name = order_data.get('customer_name', 'N/A')
        customer_email = order_data.get('customer_email', 'N/A')
        customer_phone = order_data.get('customer_phone', 'N/A')
        
        shipping = order_data.get('shipping_address', {})
        ship_address = (
            f"{shipping.get('line1', 'N/A')}<br/>"
            f"{shipping.get('city', 'N/A')}, {shipping.get('postal_code', 'N/A')}<br/>"
            f"{shipping.get('country', 'LK')}"
        )
        
        info_data = [
            [
                Paragraph('<b>Bill To:</b>', self.styles['SectionHeading']),
                Paragraph('<b>Ship To:</b>', self.styles['SectionHeading'])
            ],
            [
                Paragraph(f"<b>{customer_name}</b><br/>{customer_email}<br/>{customer_phone}", 
                         self.styles['Normal']),
                Paragraph(f"<b>{customer_name}</b><br/>{ship_address}", 
                         self.styles['Normal'])
            ]
        ]
        
        info_table = Table(info_data, colWidths=[85*mm, 85*mm])
        info_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f7fafc')),
            ('PADDING', (0, 0), (-1, -1), 8),
        ]))
        
        elements.append(info_table)
        return elements
    
    def _build_items_table(self, order_data: dict):
        """Build order items table."""
        elements = []
        
        elements.append(Paragraph('<b>Order Details</b>', self.styles['SectionHeading']))
        elements.append(Spacer(1, 3*mm))
        
        # Table header (use Paragraphs so markup renders correctly)
        items_data = [
            [
                Paragraph('Item', self.styles['TableHeader']),
                Paragraph('Quantity', self.styles['TableHeader']),
                Paragraph('Price', self.styles['TableHeader']),
                Paragraph('Total', self.styles['TableHeader'])
            ]
        ]
        
        # Table rows
        items = order_data.get('items', [])
        subtotal = 0
        
        for item in items:
            title = item.get('title', 'N/A')
            quantity = item.get('quantity', 1)
            price = float(item.get('price', 0))
            total = quantity * price
            subtotal += total
            
            items_data.append([
                Paragraph(title, self.styles['TableCell']),
                Paragraph(str(quantity), self.styles['TableCellRight']),
                Paragraph(f"LKR {price:.2f}", self.styles['TableCellRight']),
                Paragraph(f"LKR {total:.2f}", self.styles['TableCellRight'])
            ])
        
        # Subtotal, shipping, tax rows (use Paragraphs for markup)
        # Add a small spacer row
        items_data.append([
            Paragraph('', self.styles['TableCell']),
            Paragraph('', self.styles['TableCell']),
            Paragraph('', self.styles['TableCell']),
            Paragraph('', self.styles['TableCell'])
        ])

        items_data.append([
            Paragraph('', self.styles['TableCell']),
            Paragraph('', self.styles['TableCell']),
            Paragraph('Subtotal:', self.styles['TableCellRight']),
            Paragraph(f"LKR {subtotal:.2f}", self.styles['TableCellRight'])
        ])

        # Shipping (if available)
        shipping_cost = float(order_data.get('shipping_cost', 0))
        if shipping_cost > 0:
            items_data.append([
                Paragraph('', self.styles['TableCell']),
                Paragraph('', self.styles['TableCell']),
                Paragraph('Shipping:', self.styles['TableCellRight']),
                Paragraph(f"LKR {shipping_cost:.2f}", self.styles['TableCellRight'])
            ])

        # Tax (if available)
        tax = float(order_data.get('tax', 0))
        if tax > 0:
            items_data.append([
                Paragraph('', self.styles['TableCell']),
                Paragraph('', self.styles['TableCell']),
                Paragraph('Tax:', self.styles['TableCellRight']),
                Paragraph(f"LKR {tax:.2f}", self.styles['TableCellRight'])
            ])

        # Total
        total_amount = float(order_data.get('total_amount', subtotal))
        items_data.append([
            Paragraph('', self.styles['TableCell']),
            Paragraph('', self.styles['TableCell']),
            Paragraph('<b>Total:</b>', self.styles['TableCellRight']),
            Paragraph(f"<b>LKR {total_amount:.2f}</b>", self.styles['TableCellRight'])
        ])
        
        # Create table
        items_table = Table(items_data, colWidths=[80*mm, 25*mm, 30*mm, 35*mm])
        
        # Style the table
        row_count = len(items_data)
        summary_start = max(1, row_count - 3)  # roughly the starting index for summary rows

        table_style = [
            # Header row
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#6D74FF')),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
            ('ALIGN', (1, 0), (-1, -1), 'RIGHT'),
            ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
            ('FONTSIZE', (0, 0), (-1, 0), 11),
            ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
            ('TOPPADDING', (0, 0), (-1, 0), 10),

            # Content rows
            ('FONTNAME', (0, 1), (-1, row_count-1), 'Helvetica'),
            ('FONTSIZE', (0, 1), (-1, row_count-1), 10),
            ('TOPPADDING', (0, 1), (-1, row_count-1), 6),
            ('BOTTOMPADDING', (0, 1), (-1, row_count-1), 6),
            ('GRID', (0, 0), (-1, row_count-1), 0.4, colors.HexColor('#e6e6e6')),

            # Line above summary
            ('LINEABOVE', (2, summary_start), (-1, summary_start), 0.8, colors.HexColor('#cbd5e1')),

            # Total row (bold)
            ('FONTNAME', (2, row_count-1), (-1, row_count-1), 'Helvetica-Bold'),
            ('FONTSIZE', (2, row_count-1), (-1, row_count-1), 12),
            ('LINEABOVE', (2, row_count-1), (-1, row_count-1), 1.5, colors.HexColor('#6D74FF')),
        ]
        
        items_table.setStyle(TableStyle(table_style))
        elements.append(items_table)
        
        return elements
    
    def _build_payment_info(self, order_data: dict):
        """Build payment information section."""
        elements = []
        
        elements.append(Spacer(1, 5*mm))
        elements.append(Paragraph('<b>Payment Information</b>', self.styles['SectionHeading']))
        
        payment_method = order_data.get('payment_method', 'bank_transfer')
        payment_status = order_data.get('payment_status', 'unknown')
        selected_bank = order_data.get('selected_bank', 'N/A')
        transaction_ref = order_data.get('transaction_reference', 'N/A')
        
        payment_text = f"""
        <b>Payment Method:</b> {payment_method.replace('_', ' ').title()}<br/>
        <b>Payment Status:</b> <font color='green'>{payment_status.upper()}</font><br/>
        <b>Bank:</b> {selected_bank}<br/>
        <b>Transaction Reference:</b> {transaction_ref}<br/>
        """
        
        elements.append(Paragraph(payment_text, self.styles['Normal']))
        
        return elements
    
    def _build_footer(self):
        """Build invoice footer with notes and thank you message."""
        elements = []
        
        elements.append(Spacer(1, 10*mm))
        elements.append(self._create_line())
        elements.append(Spacer(1, 3*mm))
        
        footer_text = """
        <b>Notes:</b><br/>
        Thank you for your business! If you have any questions about this invoice, 
        please contact us at contact@ecommerce.lk or call +94 76 897 6222.
        <br/><br/>
        <b>Terms & Conditions:</b><br/>
        Payment is verified. Items will be shipped within 2-3 business days. 
        Please retain this invoice for your records.
        """
        
        elements.append(Paragraph(footer_text, self.styles['Normal']))
        
        # Center-aligned thank you
        thank_you_style = ParagraphStyle(
            name='ThankYou',
            parent=self.styles['Normal'],
            fontSize=14,
            textColor=colors.HexColor('#6D74FF'),
            alignment=TA_CENTER,
            spaceAfter=0
        )
        
        elements.append(Spacer(1, 8*mm))
        elements.append(Paragraph('<b>Thank you for shopping with us!</b>', thank_you_style))
        
        return elements
    
    def _create_line(self):
        """Create a horizontal line separator."""
        from reportlab.graphics.shapes import Drawing, Line
        
        d = Drawing(170*mm, 1)
        line = Line(0, 0, 170*mm, 0)
        line.strokeColor = colors.HexColor('#e2e8f0')
        line.strokeWidth = 1
        d.add(line)
        return d
    
    def _add_page_decoration(self, canvas_obj, doc):
        """Add page decorations and page numbers."""
        canvas_obj.saveState()
        
        # Page number at bottom
        page_num_text = f"Page 1"
        canvas_obj.setFont('Helvetica', 9)
        canvas_obj.setFillColor(colors.grey)
        canvas_obj.drawCentredString(
            self.width / 2,
            15*mm,
            page_num_text
        )
        
        # Watermark or brand element (subtle)
        canvas_obj.setFillColor(colors.HexColor('#f7fafc'))
        canvas_obj.setFont('Helvetica-Bold', 60)
        canvas_obj.saveState()
        canvas_obj.translate(self.width / 2, self.height / 2)
        canvas_obj.rotate(45)
        # canvas_obj.drawCentredString(0, 0, "PAID")  # Uncomment for watermark
        canvas_obj.restoreState()
        
        canvas_obj.restoreState()
    
    def _format_date(self, date_value) -> str:
        """Format date string to readable format."""
        if not date_value:
            return datetime.now().strftime('%B %d, %Y')
        
        try:
            if isinstance(date_value, str):
                dt = datetime.fromisoformat(date_value.replace('Z', '+00:00'))
            else:
                dt = date_value
            return dt.strftime('%B %d, %Y')
        except:
            return datetime.now().strftime('%B %d, %Y')


# Singleton instance
invoice_generator = InvoiceGenerator()


def generate_order_invoice(order_data: dict) -> BytesIO:
    """
    Generate PDF invoice for an order.
    
    Args:
        order_data: Dictionary containing order information
        
    Returns:
        BytesIO: PDF file buffer ready for download
    """
    return invoice_generator.generate_invoice(order_data)
