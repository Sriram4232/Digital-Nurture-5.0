public class Test {
    public static void main(String[] args) {
        DocumentFactory factory;

        factory = new WordDocumentFactory();
        Document wordDoc = factory.createDocument();
        wordDoc.open();

        factory = new PDFDocumentFactory();
        Document pdfDoc = factory.createDocument();
        pdfDoc.open();

        factory = new ExcelDocumentFactory();
        Document excelDoc = factory.createDocument();
        excelDoc.open();
    }
}