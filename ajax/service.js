/*
 * TroopJS net/ajax/service
 * @license MIT http://troopjs.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
define([
	"troopjs-core/component/service",
	"jquery",
	"troopjs-utils/merge"
], function (Service, $, merge) {
	"use strict";

	return Service.extend({
		"displayName" : "net/ajax/service",

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
