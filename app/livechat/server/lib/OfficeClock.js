// Every minute check if office closed
import { Meteor } from 'meteor/meteor';
import { settings } from '/app/settings';
import { Users, LivechatOfficeHour } from '/app/models';

Meteor.setInterval(function() {
	if (settings.get('Livechat_enable_office_hours')) {
		if (LivechatOfficeHour.isOpeningTime()) {
			Users.openOffice();
		} else if (LivechatOfficeHour.isClosingTime()) {
			Users.closeOffice();
		}
	}
}, 60000);
