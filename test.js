const { Document, Media, TextRun, WidthType, HeadingLevel, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection, AlignmentType } = require('docx');

const fs = require('fs');

const doc = new Document();

const tableParticulars = [
    {
        sn: 1,
        detail: "Admission charge",
        rate: 600,
        qty: 1,
        net: 600
    },
    {
        sn: 2,
        detail: "Admission charge",
        rate: 600,
        qty: 1,
        net: 600
    },
    {
        sn: 3,
        detail: "Admission charge",
        rate: 600,
        qty: 1,
        net: 600
    },
    {
        sn: 4,
        detail: "Admission charge",
        rate: 600,
        qty: 1,
        net: 600
    },
]

const data = {
    totalAmount: 2400,
    rows: tableParticulars
}

const header = Media.addImage(doc, fs.readFileSync('./static/assets/header.png'), 725, 300);

const tableRowsList = []
data.rows.forEach( (particular) => {
    console.log(particular)
    const nRow = new TableRow({
        children: [
            new TableCell({
                margins: 10,
                width: { size: 10, type: WidthType.PERCENTAGE },
                children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: particular.sn.toString(),
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.LEFT
                    }
                )],
                verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
                margins: 10,
                width: { size: 50, type: WidthType.PERCENTAGE },
                children: [new Paragraph({
                    children: [
                        new TextRun({
                            text: particular.detail.toString(),
                            size: 22,
                            font: "Arial"
                        })
                    ],
                    alignment: AlignmentType.LEFT
                }
            )],
                verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
                width: { size: 10, type: WidthType.PERCENTAGE },
                children: [new Paragraph({
                    children: [
                        new TextRun({
                            text: particular.rate.toString(),
                            size: 22,
                            font: "Arial"
                        })
                    ],
                    alignment: AlignmentType.RIGHT
                }
            )],
                textDirection: TextDirection.CENTER,
            }),
            new TableCell({
                width: { size: 10, type: WidthType.PERCENTAGE },
                children: [new Paragraph({
                    children: [
                        new TextRun({
                            text: particular.qty.toString(),
                            size: 22,
                            font: "Arial"
                        })
                    ],
                    alignment: AlignmentType.RIGHT
                }
            )],
                textDirection: TextDirection.CENTER,
            }),
            new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                children: [new Paragraph({
                    children: [
                        new TextRun({
                            text: particular.net.toString(),
                            size: 22,
                            font: "Arial"
                        })
                    ],
                    alignment: AlignmentType.RIGHT
                }
            )],
                textDirection: TextDirection.CENTER,
            })
        ],
    })
    tableRowsList.push(nRow)
} )

const table = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Sr. No.",
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }
                ), new Paragraph({})],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Details",
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }
                ), new Paragraph({})],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Rate",
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }
                ), new Paragraph({})],
                    textDirection: TextDirection.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Quantity",
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }
                ), new Paragraph({})],
                    textDirection: TextDirection.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Net Amount",
                                size: 22,
                                font: "Arial"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }
                ), new Paragraph({})],
                    textDirection: TextDirection.CENTER,
                }),
            ],
        }),
        ...tableRowsList,
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({})],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "Total",
                                size: 22,
                                font: "Arial",
                                bold: true
                            })
                        ],
                        alignment: AlignmentType.LEFT
                    }
                )],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({})],
                    textDirection: TextDirection.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({})],
                    textDirection: TextDirection.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: data.totalAmount.toString(),
                                size: 22,
                                font: "Arial",
                                bold: true
                            })
                        ],
                        alignment: AlignmentType.RIGHT
                    }
                )],
                    verticalAlign: VerticalAlign.CENTER,
                }),
            ],
        }),
    ]
})

doc.addSection({
    margins: {
        top: 720,
        right: 720,
        bottom: 720,
        left: 720,
    },
    children: [
        new Paragraph(header), 
        new Paragraph({
            children: [
                new TextRun({
                    text: "\nFINAL BILL\n",
                    bold: true,
                    underline: true,
                    size: 32,
                    font: "Arial"
                })
            ],
            alignment: AlignmentType.CENTER
        }),
        new Paragraph({}),
        table
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});