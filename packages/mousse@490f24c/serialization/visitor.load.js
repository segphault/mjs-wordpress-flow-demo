montageDefine("490f24c","serialization/visitor",{dependencies:["collections/shim-object"],factory:function(e,t){(function(t){function n(e,t){this.builder=e,this.labeler=t,this._objectsSerialization=Object.create(null)}function i(e){var t=n.prototype.getCustomObjectTypeOf;return function(n){return e(n)||t(n)}}e("collections/shim-object"),Object.defineProperties(n.prototype,{builder:{value:null,writable:!0},labeler:{value:null,writable:!0},getTypeOf:{value:function(e){return this.isCustomObject(e)?"CustomObject":void 0}},getCustomObjectTypeOf:{value:function(){},writable:!0},isCustomObject:{value:function(e){var t=this.getCustomObjectTypeOf(e);return"string"==typeof t}},_objectsSerialization:{value:null,writable:!0},setObjectSerialization:{value:function(e,t){this._objectsSerialization[Object.hash(e)]=t}},getObjectSerialization:{value:function(e){return this._objectsSerialization[Object.hash(e)]}},isObjectSerialized:{value:function(e){return Object.hash(e)in this._objectsSerialization}},enterObject:{value:function(e,t){var n=this.builder.createObjectLiteral();this.setObjectSerialization(t,n),this.builder.push(n)}},exitObject:{value:function(e,t,n){this.storeValue(this.builder.pop(),t,n)}},visitObject:{value:function(e,t,n){var i=this.labeler.getObjectLabel(t),r=this.builder.createObjectReference(i);this.getObjectSerialization(t).setLabel(i),this.builder.top.setProperty(n,r)}},enterArray:{value:function(e,t){var n=this.builder.createArray();this.setObjectSerialization(t,n),this.builder.push(n)}},exitArray:{value:function(e,t,n){this.storeValue(this.builder.pop(),t,n)}},visitArray:{value:function(e,t,n){var i=this.labeler.getObjectLabel(t),r=this.builder.createObjectReference(i);this.getObjectSerialization(t).setLabel(i),this.builder.top.setProperty(n,r)}},visitRegExp:{value:function(e,t,n){this.storeValue(this.builder.createRegExp(t),t,n)}},visitString:{value:function(e,t,n){this.storeValue(this.builder.createString(t),t,n)}},visitNumber:{value:function(e,t,n){this.storeValue(this.builder.createNumber(t),t,n)}},visitBoolean:{value:function(e,t,n){this.storeValue(this.builder.createBoolean(t),t,n)}},visitNull:{value:function(e,t){this.storeValue(this.builder.createNull(),null,t)}},visitCustomObject:{value:function(e,t,n){var i=this.getCustomObjectTypeOf(t),a=r["visit"+i];if(i)return a.call(global,e,this,t,n);throw Error("Object's type is unknown: "+t)}},storeValue:{value:function(e,t,n){n===void 0?e.setLabel(this.labeler.getObjectLabel(t)):this.builder.top.setProperty(n,e)}}});var r=Object.create(null);n.addCustomObjectVisitor=function(e){for(var t in e)if("getTypeOf"!==t&&"function"==typeof e[t]&&/^visit/.test(t)){if(void 0!==r[t])return Error("Visitor '"+t+"' is already registered.");r[t]=e[t].bind(e)}this.prototype.getCustomObjectTypeOf=i(e.getTypeOf)},n.resetCustomObjectVisitors=function(){r=Object.create(null),this.prototype.getCustomObjectTypeOf=function(){}},t.Visitor=n})(t)}});