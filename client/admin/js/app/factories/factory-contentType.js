(function() {

	var stContentTypeFactory = angular.module('stContentTypeFactory', []);

	stContentTypeFactory.factory('contentTypeFactory', function($http) {
		return {
			'heading': {
				'typeLabel': 'Заголовок',
				'typeValue': 'heading',
				'heading': {
					'html': '',
					'icon': {
						'enabled': false,
						'name': ''
					},
					'settings': {
						'align': {
							'label': 'Выравнивание',
							'value': 'center'
						},
						'viewHeading': {
							'label': 'Вид',
							'value': 'text'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '4'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						}
					}
				}
			},
			'banner': {
				'typeLabel': 'Баннер',
				'typeValue': 'banner',
				'heading': {
					'html': ''
				},
				'text': {
					'html': ''
				},
				'link': {
					'html': ''
				},
				'banner': {
					'settings': {
						'upload': {
							'label': 'Загрузка',
							'value': ''
						},
						'overflow': {
							'label': 'Фон',
							'value': '1'
						},
						'width': {
							'label': 'Ширина',
							'value': '5'
						},
						'height': {
							'label': 'Высота',
							'value': '3'
						},
						'bannerSettings': {
							'heading': {
								'label': 'Показывать заголовок',
								'value': true
							},
							'text': {
								'label': 'Показывать текст',
								'value': true
							},
							'link': {
								'label': 'Показывать кнопку',
								'value': true
							}
						},
						'bannerHeading': {
							'align': {
								'label': 'Выравнивание',
								'value': 'center'
							},
							'fontSize': {
								'label': 'Размер шрифта',
								'value': '4'
							},
							'fontWeight': {
								'label': 'Жирность',
								'value': '3'
							},
							'color': {
								'label': 'Цвет текста',
								'value': '2'
							},
							'icon': {
								'enabled': false,
								'name': '',
								'iconPosition': '1'
							}
						},
						'bannerText': {
							'align': {
								'label': 'Выравнивание',
								'value': 'center'
							},
							'fontSize': {
								'label': 'Размер шрифта',
								'value': '1'
							},
							'fontWeight': {
								'label': 'Жирность',
								'value': '2'
							},
							'color': {
								'label': 'Цвет текста',
								'value': '2'
							}
						},
						'bannerLink': {
							'url': {
								'label': 'Ссылка',
								'value': ''
							},
							'align': {
								'label': 'Выравнивание',
								'value': 'center'
							},
							'fontSize': {
								'label': 'Размер шрифта',
								'value': '2'
							},
							'fontWeight': {
								'label': 'Жирность',
								'value': '2'
							},
							'color': {
								'label': 'Цвет текста',
								'value': '2'
							},
							'linkType': {
								'label': 'Сделать кнопкой',
								'value': true
							}
						},
						'position': {
							'label': 'Расположение текста',
							'value': '5'
						}
					}
				}
			},
			'image': {
				'typeLabel': 'Изображение',
				'typeValue': 'image',
				'caption': {
					'html': '',
					'settings': {
						'align': {
							'label': 'Выравнивание',
							'value': 'center'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '2'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '2'
						}
					}
				},
				'image': {
					'settings': {
						'width': {
							'label': 'Ширина',
							'value': '4'
						},
						'height': {
							'label': 'Высота',
							'value': '1'
						},
						'viewImage': {
							'label': 'Вид',
							'value': 'square'
						},
						'upload': {
							'label': 'Загрузка',
							'value': ''
						},
						'visibility': {
							'label': 'Показывать подпись',
							'value': true
						}
					}
				}
			},
			'feature': {
				'typeLabel': 'Фича',
				'typeValue': 'feature',
				'heading': {
					'html': '',
					'icon': {
						'enabled': false,
						'name': ''
					},
					'settings': {
						'align': {
							'label': 'Выравнивание',
							'value': 'left'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '4'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						}
					}
				},
				'text': {
					'html': '',
					'settings': {
						'align': {
							'label': 'Выравнивание',
							'value': 'left'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '1'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						}
					}
				},
				'link': {
					'html': '',
					'settings': {
						'url': {
							'label': 'Ссылка',
							'value': ''
						},
						'align': {
							'label': 'Выравнивание',
							'value': 'left'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '1'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						},
						'linkType': {
							'label': 'Сделать кнопкой',
							'value': false
						}
					}
				},
				'feature': {
					'settings': {
						'upload': {
							'label': 'Загрузка',
							'value': ''
						},
						'width': {
							'label': 'Ширина',
							'value': '3'
						},
						'height': {
							'label': 'Высота',
							'value': '3'
						},
						'viewImage': {
							'label': 'Вид',
							'value': 'square'
						},
						'featureSettings': {
							'heading': {
								'label': 'Показывать заголовок',
								'value': true
							},
							'text': {
								'label': 'Показывать текст',
								'value': true
							},
							'link': {
								'label': 'Показывать кнопку',
								'value': true
							}
						},
						'positionVertical': {
							'label': 'Вертикальное выравнивание',
							'value': '2'
						},
						'positionHorisontal': {
							'label': 'Горизонтальное выравнивание',
							'value': '1'
						}
					}
				}
			},
			'grid': {
				'typeLabel': 'Сетка',
				'typeValue': 'grid',
				'content': [
					{

					}
				]
			},
			'list': {
				'typeLabel': 'Список',
				'typeValue': 'list',
				'content': [
					{
						'html': ''
					}
				],
				'text': {
					'settings': {
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '1'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						},
						'listSettings': {
							'label': 'Настройки списка',
							'value': {
								'bullets': true,
								'numeric': false
							}
						},
						'addListItem': {
							'label': 'Добавить элемент'
						}
					}
				}
			},
			'icons-list': {
				'typeLabel': 'Список иконок',
				'typeValue': 'icons-list',
				'content': [
					{
						'html': ''
					}
				],
				'settings': {
					'fontSize': {
						'label': 'Размер шрифта',
						'value': '1'
					},
					'color': {
						'label': 'Цвет текста',
						'value': '1'
					}
				}
			},
			'text': {
				'typeLabel': 'Текст',
				'typeValue': 'text',
				'text': {
					'html': '',
					'settings': {
						'align': {
							'label': 'Выравнивание',
							'value': 'left'
						},
						'fontSize': {
							'label': 'Размер шрифта',
							'value': '1'
						},
						'fontWeight': {
							'label': 'Жирность',
							'value': '2'
						},
						'color': {
							'label': 'Цвет текста',
							'value': '1'
						}
					}
				}
			},
			'tabs': {
				'typeLabel': 'Табы',
				'typeValue': 'tabs',
			},
			'separator': {
				'typeLabel': 'Разделитель',
				'typeValue': 'separator',
				'type': {
					'label': 'Тип',
					'value': 'line'
				}
			}
		};
	});

})();