var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?95958';
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = url;
			var options = {
		  "enabled":true,
		  "chatButtonSetting":{
			  "backgroundColor":"#25D366",
			  "ctaText":"",
			  "borderRadius":"50",
			  "marginLeft":"20",
			  "marginBottom":"20",
			  "marginRight":"0",
			  "position":"left"
		  },
		  "brandSetting":{
			  "brandName":"Ira Plant BioTech",
			  "brandSubTitle":"Typically replies within hours",
			  "brandImg":"https://cdn-icons-png.flaticon.com/512/4416/4416749.png",
			  "welcomeText":"Hi there!\nHow can I help you?",
			  "messageText":"Hey! I would need more information about services offered.",
			  "backgroundColor":"#128C7E",
			  "ctaText":"Contact Us",
			  "borderRadius":"25",
			  "autoShow":false,
			  "phoneNumber":"7676195985"
		  }
		};
			s.onload = function() {
				CreateWhatsappChatWidget(options);
			};
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);