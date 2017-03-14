define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    "Pin/lib/jquery-1.11.2",
    "Pin/lib/jquery.pin",

], function(declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, lang, dojoText, dojoHtml, dojoEvent, _jQuery, Pin) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    return declare("Pin.widget.Pin", [_WidgetBase], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

        //modeler
        selector: null,
        selectorIsName: null,
        topPadding: null,
        bottomPadding: null,
        activeClass: null,

        constructor: function() {
            this._handles = [];
        },

        postCreate: function() {
            logger.debug(this.id + ".postCreate");
        },

        update: function(obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        resize: function(box) {
            logger.debug(this.id + ".resize");
        },

        uninitialize: function() {
            logger.debug(this.id + ".uninitialize");
        },

        _initializePin: function() {
            var sel = this.selectorIsName ? this._getSelectorFromName(this.selector) : this.selector
            ,   el = this.domNode.parentElement.querySelector(sel);
            var wait = setInterval(function() {
              if ($(el).closest('.mx-scrollcontainer').length > 0) {
                act();
                clearInterval(wait);
              }
            }, 100);
            var act = lang.hitch(this,function(){
              $(el).pin({
                containerSelector: '.mx-scrollcontainer',
                padding: {
                  top: this.topPadding ? this.topPadding : null,
                  bottom: this.bottomPadding ? this.bottomPadding : null,
                },
                activeClass: this.activeClass ? this.activeClass : null
              });
            });
            // $(sel).pin();
        },

        _getSelectorFromName: function(mendixName) {
            return ".mx-name-" + mendixName;
        },

        _updateRendering: function(callback) {
            logger.debug(this.id + "._updateRendering");

            if (this._contextObj !== null) {
                dojoStyle.set(this.domNode, "display", "block");
            } else {
                dojoStyle.set(this.domNode, "display", "none");
            }
            this._initializePin();
            this._executeCallback(callback);
        },

        _executeCallback: function(cb) {
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["Pin/widget/Pin"]);
