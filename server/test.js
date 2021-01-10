const { Document, Media, Run, TextRun, WidthType, BorderStyle, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection, AlignmentType } = require("docx");
const fs = require("fs");

const doc = new Document();

const tableParticulars = [
	{
		sn: 1,
		detail: "Admission charge",
		rate: 600,
		qty: 1,
		net: 600,
	},
	{
		sn: 2,
		detail: "Admission charge",
		rate: 600,
		qty: 1,
		net: 600,
	},
	{
		sn: 3,
		detail: "Admission charge",
		rate: 600,
		qty: 1,
		net: 600,
	},
	{
		sn: 4,
		detail: "Admission charge",
		rate: 600,
		qty: 1,
		net: 600,
	},
];

const data = {
	ipd: "VAI201011001",
	bill_no: "IPB/20-21/052",
	bill_date: "18/10/2020",
	patient_name: "Garima Dwivedi",
	age: 26,
	sex: "Female",
	contact: "+91 82083 03878",
    doctor1: "Dr. Vani Bajpai",
    doctor2: "Dr. Parag Bajpai",
	address: "B 2/241, Ramkutir, Bhadaini, Varanasi",
	admission_date: "11/10/2020",
	discharge_type: "Normal Discharged",
	discharge_date: "18/10/2020",
	dept: "Surgical / Medical",
	payment_method: "CASH",
	totalAmount: 2400,
	rows: tableParticulars,
};

const header = Media.addImage(doc, fs.readFileSync("./static/assets/header.png"), 725, 224);

const tableRowsList = [];
data.rows.forEach((particular) => {
	console.log(particular);
	const nRow = new TableRow({
		children: [
			new TableCell({
				width: { size: 8, type: WidthType.PERCENTAGE },
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: " " + particular.sn.toString() + " ",
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
				margins: 10,
				width: { size: 50, type: WidthType.PERCENTAGE },
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: " " + particular.detail.toString() + " ",
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
				width: { size: 12, type: WidthType.PERCENTAGE },
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: " " + particular.rate.toString() + "‎‎‎‏‏‎ ‎‏‏‎ ‎",
								size: 22,
								font: "Arial",
							}),
						],
						alignment: AlignmentType.RIGHT,
					}),
				],
				textDirection: TextDirection.CENTER,
			}),
			new TableCell({
				width: { size: 10, type: WidthType.PERCENTAGE },
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: " " + particular.qty.toString() + " ‎‏‏‎ ",
								size: 22,
								font: "Arial",
							}),
						],
						alignment: AlignmentType.RIGHT,
					}),
				],
				textDirection: TextDirection.CENTER,
			}),
			new TableCell({
				width: { size: 20, type: WidthType.PERCENTAGE },
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: " " + particular.net.toString() + " ‎‏‏‎ ",
								size: 22,
								font: "Arial",
							}),
						],
						alignment: AlignmentType.RIGHT,
					}),
				],
				textDirection: TextDirection.CENTER,
			}),
		],
	});
	tableRowsList.push(nRow);
});

const table = new Table({
	rows: [
		new TableRow({
			children: [
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "Sr. No.",
									size: 22,
									font: "Arial",
								}),
							],
							alignment: AlignmentType.CENTER,
						}),
						new Paragraph({}),
					],
					verticalAlign: VerticalAlign.CENTER,
				}),
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "Details",
									size: 22,
									font: "Arial",
								}),
							],
							alignment: AlignmentType.CENTER,
						}),
						new Paragraph({}),
					],
					verticalAlign: VerticalAlign.CENTER,
				}),
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "Rate",
									size: 22,
									font: "Arial",
								}),
							],
							alignment: AlignmentType.CENTER,
						}),
						new Paragraph({}),
					],
					textDirection: TextDirection.CENTER,
				}),
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "Qty",
									size: 22,
									font: "Arial",
								}),
							],
							alignment: AlignmentType.CENTER,
						}),
						new Paragraph({}),
					],
					textDirection: TextDirection.CENTER,
				}),
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "Net Amount",
									size: 22,
									font: "Arial",
								}),
							],
							alignment: AlignmentType.CENTER,
						}),
						new Paragraph({}),
					],
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
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: " Total",
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
					children: [new Paragraph({})],
					textDirection: TextDirection.CENTER,
				}),
				new TableCell({
					children: [new Paragraph({})],
					textDirection: TextDirection.CENTER,
				}),
				new TableCell({
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: data.totalAmount.toString() + " ‎‏‏‎ ",
									size: 22,
									font: "Arial",
									bold: true,
								}),
							],
							alignment: AlignmentType.RIGHT,
						}),
					],
					verticalAlign: VerticalAlign.CENTER,
				}),
			],
		}),
	],
});

const details_table = new Table({
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
	rows: [
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
					width: { size: 25, type: WidthType.PERCENTAGE },
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: "IPD No.",
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
									text: data.ipd.toString(),
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
									text: "Bill No. ",
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
							size: 14,
							color: "white",
						},
					},
					width: { size: 25, type: WidthType.PERCENTAGE },
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: data.bill_no.toString(),
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
					children: [],
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
					children: [],
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
									text: "Bill Date ",
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
							size: 14,
							color: "white",
						},
					},
					width: { size: 25, type: WidthType.PERCENTAGE },
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: data.bill_date.toString(),
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
							size: 14,
							color: "white",
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
							size: 14,
							color: "white",
						},
					},
					width: { size: 25, type: WidthType.PERCENTAGE },
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: data.admission_date.toString(),
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
									text: data.discharge_date.toString(),
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
									text: "Department",
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
									text: data.dept.toString(),
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
									text: "Payment Method ",
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
							size: 14,
							color: "white",
						},
					},
					width: { size: 25, type: WidthType.PERCENTAGE },
					children: [
						new Paragraph({
							children: [
								new TextRun({
									text: data.payment_method.toString(),
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
					text: "FINAL BILL",
					bold: true,
					underline: true,
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
					text: "\n\n\n\nFor Vaibhav Hospital",
					size: 22,
					font: "Arial",
				}),
			],
			alignment: AlignmentType.LEFT,
		}),
	],
});

Packer.toBuffer(doc).then((buffer) => {
	fs.writeFileSync(data.patient_name.split(" ").join("") + data.bill_date.split('/').join('') + ".docx", buffer);
});
