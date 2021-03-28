const { Document, Media, Run, TextRun, WidthType, BorderStyle, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection, AlignmentType } = require("docx");
const fs = require("fs");
const path = require("path");

async function generateDischarge (data) {
    const tableRowsList = require("./create_rows_discharge.js")(data.rows);
    const doc = new Document();
    const header = Media.addImage(doc, fs.readFileSync(path.join(__dirname, "../static/header.png").toString()), 725, 224);
    const table = new Table({
        rows: tableRowsList
    });

    const details_table = new Table({
        borders: {
            top: {
                style: BorderStyle.SINGLE,
                size: 14,
                color: "black",
            },
            bottom: {
                style: BorderStyle.SINGLE,
                size: 14,
                color: "black",
            },
            left: {
                style: BorderStyle.SINGLE,
                size: 14,
                color: "black",
            },
            right: {
                style: BorderStyle.SINGLE,
                size: 14,
                color: "black",
            },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Patient Name",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.patient_name.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Age/Sex",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text:
                                            data.age.toString() +
                                            "/" +
                                            data.sex.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Contact No.",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.contact.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Doctor ",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.doctor1.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.doctor2.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Address",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.address.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Admission Date ",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.admission_date.toString() + " (" + data.admisson_time.toString() + ")",
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Discharge Type",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.discharge_type.toString(),
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Discharge Date ",
                                        size: 22,
                                        font: "Arial",
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 14,
                                color: "white",
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 7,
                                color: "black",
                            },
                        },
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: data.discharge_date.toString() + " (" + data.discharge_time.toString() + ")",
                                        size: 22,
                                        font: "Arial",
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        textDirection: TextDirection.CENTER,
                    }),
                ],
            })
        ],
    });
    const blank = new Paragraph({children: []});
    blank.addRunToFront(new Run({children: []}).break());
    doc.addSection({
        margins: {
            top: 0,
            right: 360,
            bottom: 720,
            left: 720,
        },
        children: [
            new Paragraph(header),
            blank,
            new Paragraph({
                children: [
                    new TextRun({
                        text: "DISCHARGE SUMMARY",
                        bold: true,
                        underline
                        : true,
                        size: 28,
                        font: "Arial",
                    }),
                ],
                alignment: AlignmentType.CENTER,
            }),
            blank,
            details_table,
            blank,
            table,
            blank,
            blank,
            blank,
            new Paragraph({
                children: [
                    new TextRun({
                        text: "For Vaibhav Hospital",
                        size: 24,
                        font: "Calibri (Body)",
                    }),
                ],
                alignment: AlignmentType.LEFT,
            }),
        ],
    });

    const filepath = 'database/discharges/'
    const filename = data.patient_name.split(" ").join("") + data.discharge_date.split('/').join('') + "_discharge" + ".docx"

    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(path.join(filepath, filename), buffer);
    });

    return path.join(filepath, filename)
}

module.exports = generateDischarge