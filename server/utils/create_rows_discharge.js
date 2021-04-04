const { Document, Media, Run, TextRun, WidthType, BorderStyle, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection, AlignmentType } = require("docx");

function generateRows (particulars) {

    const treatmentLines = [];
    particulars.treatment_given.split('\n').forEach(line => {
        treatmentLines.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: line,
                        size: 28,
                        font: "Calibri (Body)",
                    })
                ],
                alignment: AlignmentType.LEFT,
            })
        )
    })

    const adviceOnDischargeLines = [];
    particulars.advice_on_discharge.split('\n').forEach(line => {
        adviceOnDischargeLines.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: line,
                        size: 28,
                        font: "Calibri (Body)",
                    })
                ],
                alignment: AlignmentType.LEFT,
            })
        )
    })

    const adviceforBabyLines = [];
    particulars.advice_for_baby.split('\n').forEach(line => {
        adviceforBabyLines.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: line,
                        size: 28,
                        font: "Calibri (Body)",
                    })
                ],
                alignment: AlignmentType.LEFT,
            })
        )
    })

    const precautionLines = [];
    particulars.precautions.split('\n').forEach(line => {
        precautionLines.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: line,
                        size: 28,
                        font: "Calibri (Body)",
                    })
                ],
                alignment: AlignmentType.LEFT,
            })
        )
    })

    const urgentCareLines = [];
    particulars.urgent_care.split('\n').forEach(line => {
        urgentCareLines.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: line,
                        size: 28,
                        font: "Calibri (Body)",
                    })
                ],
                alignment: AlignmentType.LEFT,
            })
        )
    })

    const blankRow = new TableRow({
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
                        size: 14,
                        color: "white",
                    },
                    right: {
                        style: BorderStyle.SINGLE,
                        size: 14,
                        color: "white",
                    },
                },
                width: { size: 30, type: WidthType.PERCENTAGE },
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                size: 28,
                                font: "Calibri (Body)",
                                bold: true,
                            }),
                        ],
                        alignment: AlignmentType.LEFT,
                    }),
                ],
                verticalAlign: VerticalAlign.TOP,
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
                margins: 20,
                width: { size: 70, type: WidthType.PERCENTAGE },
                children: [
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                size: 28,
                                font: "Calibri (Body)",
                            }),
                            new TextRun({
                                text: "",
                                size: 28,
                                font: "Calibri (Body)",
                            }),
                        ],
                        alignment: AlignmentType.LEFT,
                    }),
                ],
                verticalAlign: VerticalAlign.TOP,
            })
        ],
    })

    const tableRows = [
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "DIAGNOSIS",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.diagnosis.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "COMPLAINTS AT TIME OF ADMISSION",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.complaints.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "REASON OF ADMISSION",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.reason_for_admission.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "INVESTIGATIONS",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.investigations.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "TREATMENT GIVEN",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: treatmentLines,
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "CONDITION AT TIME OF DISCHARGE",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.condition.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "ADVICE ON DISCHARGE",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: adviceOnDischargeLines,
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "PRECAUTIONS",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: precautionLines,
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "FOLLOW UP",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: particulars.follow_up.toString() + "\n",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                                new TextRun({
                                    text: "",
                                    size: 28,
                                    font: "Calibri (Body)",
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "WHEN AND HOW TO OBTAIN URGENT CARE",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: urgentCareLines,
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }),
        blankRow,
    ];

    if (particulars.advice_for_baby != undefined) {
        tableRows.push(new TableRow({
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
                            size: 14,
                            color: "white",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 14,
                            color: "white",
                        },
                    },
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "ADVICE FOR BABY",
                                    size: 28,
                                    font: "Calibri (Body)",
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.LEFT,
                        }),
                    ],
                    verticalAlign: VerticalAlign.TOP,
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
                    margins: 20,
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: adviceforBabyLines,
                    verticalAlign: VerticalAlign.TOP,
                })
            ],
        }))
    }

    return tableRows;
}

module.exports = generateRows;