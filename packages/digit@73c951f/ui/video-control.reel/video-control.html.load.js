montageDefine("73c951f","ui/video-control.reel/video-control.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=video-control.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"video-control"},"_controlTrack":{"@":"track"}}},"play":{"prototype":"ui/video-control.reel[Button]","properties":{"element":{"#":"play"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"track":{"prototype":"ui/video-control.reel/video-control-track.reel","properties":{"element":{"#":"track"},"value":0},"bindings":{"videoController":{"<-":"@owner.videoController"}}},"fullScreen":{"prototype":"ui/video-control.reel[Button]","properties":{"element":{"#":"fullScreen"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]}}</script>\n</head>\n<body>\n    <menu data-montage-id=video-control class=digit-VideoControl>\n         <button data-montage-id=play class=digit-VideoControl-button-play></button>\n         <div data-montage-id=track></div>\n         <button data-montage-id=fullScreen class=digit-VideoControl-button-fullScreen></button>\n     </menu>\n\n\n</body></html>'});