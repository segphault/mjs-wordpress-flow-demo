montageDefine("57e74ee","ui/card.reel/card.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=card.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"owner"}}},"image":{"prototype":"digit/ui/image.reel","properties":{"element":{"#":"image"},"crossOrigin":null},"bindings":{"src":{"<-":"@owner.post.featured_image.source"}}},"text1":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"text1"},"value":"Text"},"bindings":{"value":{"<-":"@owner.post.title"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=owner class=Card>\n        <div class="Card-face Card-face--front">\n            <img data-montage-id=image class=Card-image>\n            <div class=Card-caption>\n                <p data-montage-id=text1 class=Card-title></p>\n            </div>\n        </div>\n        <div class="Card-face Card-face--back">\n            <p></p>\n        </div>\n    </div>\n\n\n\n\n</body></html>'});