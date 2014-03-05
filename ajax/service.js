/*
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"troopjs-core/component/service",
	"jquery",
	"troopjs-utils/merge"
], function (Service, $, merge) {
	"use strict";

	/**
	 * Provides ajax as a service
	 * @class net.ajax.service
	 * @extends core.component.service
	 */

	/**
	 * @method constructor
	 */
	return Service.extend({
		"displayName" : "net/ajax/service",

		/**
		 * Make ajax request.
		 * @event
		 * @param {Object} settings
		 */
		"hub/ajax" : function ajax(settings) {
			// Request
			return $.ajax(merge.call({
				"headers": {
					"x-troopjs-request-id": new Date().getTime()
				}
			}, settings));
		}
	});
});
