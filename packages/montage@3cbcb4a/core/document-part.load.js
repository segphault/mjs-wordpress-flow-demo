montageDefine("3cbcb4a","core/document-part",{dependencies:["./core","./logger","./promise","./event/event-manager"],factory:function(e,t){var n=e("./core").Montage,r=(e("./logger").logger("document-part"),e("./promise").Promise),i=e("./event/event-manager").defaultEventManager,a=n.specialize({parentDocumentPart:{value:null},template:{value:null},fragment:{value:null},objects:{value:null},childComponents:{value:null},parameters:{value:null},constructor:{value:function a(){this.super()}},initWithTemplateAndFragment:{value:function(e,t){this.template=e,this.fragment=t,this.objects=null,this.childComponents=[],this.parameters=null}},startActingAsTopComponent:{value:function(){this.fragment&&i.registerEventHandlerForElement(this,this.fragment)}},stopActingAsTopComponent:{value:function(){this.fragment&&i.unregisterEventHandlerForElement(this.fragment)}},addChildComponent:{value:function(e){-1==this.childComponents.indexOf(e)&&this.childComponents.push(e)}},removeChildComponent:{value:function(e){var t=this.childComponents,n=t.indexOf(e);n>-1&&(t.splice(n,1),e._parentComponent=null,e._alternateParentComponent=null)}},_addToDrawList:{value:function(){}},_componentTreeLoadedDeferred:{value:null},loadComponentTree:{value:function(){var e,t=this._componentTreeLoadedDeferred;return t||(t=r.defer(),this._componentTreeLoadedDeferred=t,e=[],this.childComponents.forEach(function(t){e.push(t.loadComponentTree())}),r.all(e).then(function(){t.resolve()},t.reject).done()),t.promise}}});t.DocumentPart=a}});