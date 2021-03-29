module.exports = [{
		"path": "pages/entrance/entrance",
		"style": {
			"app-plus": {
				"subNVues": [{
					"id": "bind_recommand_code",
					"path": "pages/popout/bindRecommandCode/bindRecommandCode",
					"type": "popup",
					"style": {
						"position": "dock",
						"dock": "top",
						"width": "100%",
						"height": "100%",
						"background": "rgba(0,0,0,.3)",
						"popGesture": "none"
					}
				}, 
				{
					"id": "buy_card",
					"path": "pages/popout/basicPicture/basicPicture",
					"type": "popup",
					"style": {
						"position": "dock",
						"dock": "top",
						"width": "100%",
						"height": "100%",
						"background": "rgba(0,0,0,.3)",
						"popGesture": "none"
					}
				},
				{
					"id": "bind_store_account",
					"path": "pages/popout/bindStoreAccount/bindStoreAccount",
					"type": "popup",
					"style": {
						"position": "dock",
						"dock": "top",
						"width": "100%",
						"height": "100%",
						"background": "rgba(0,0,0,.3)",
						"popGesture": "none"
					}
				},
				{
					"id": "update_application",
					"path": "pages/popout/updateApplication/updateApplication",
					"type": "popup",
					"style": {
						"position": "dock",
						"dock": "top",
						"width": "100%",
						"height": "100%",
						"background": "rgba(0,0,0,.3)",
						"popGesture": "none"
					}
				}
				]
			}
		}

	},
	{
		"path": "pages/index/index",
		"style": {
			"popGesture": "none",
			"disableScroll": true
		}
	},
]
