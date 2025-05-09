// AuthModel
/**
 * @typedef {Object} AuthModel
 * @property {string} api_token
 * @property {string} [refreshToken]
 */

// UserAddressModel
/**
 * @typedef {Object} UserAddressModel
 * @property {string} addressLine
 * @property {string} city
 * @property {string} state
 * @property {string} postCode
 */

// UserCommunicationModel
/**
 * @typedef {Object} UserCommunicationModel
 * @property {boolean} email
 * @property {boolean} sms
 * @property {boolean} phone
 */

// UserEmailSettingsModel
/**
 * @typedef {Object} UserEmailSettingsModel
 * @property {boolean} [emailNotification]
 * @property {boolean} [sendCopyToPersonalEmail]
 * @property {Object} [activityRelatesEmail]
 * @property {boolean} [activityRelatesEmail.youHaveNewNotifications]
 * @property {boolean} [activityRelatesEmail.youAreSentADirectMessage]
 * @property {boolean} [activityRelatesEmail.someoneAddsYouAsAsAConnection]
 * @property {boolean} [activityRelatesEmail.uponNewOrder]
 * @property {boolean} [activityRelatesEmail.newMembershipApproval]
 * @property {boolean} [activityRelatesEmail.memberRegistration]
 * @property {Object} [updatesFromKeenthemes]
 * @property {boolean} [updatesFromKeenthemes.newsAboutKeenthemesProductsAndFeatureUpdates]
 * @property {boolean} [updatesFromKeenthemes.tipsOnGettingMoreOutOfKeen]
 * @property {boolean} [updatesFromKeenthemes.thingsYouMissedSindeYouLastLoggedIntoKeen]
 * @property {boolean} [updatesFromKeenthemes.newsAboutStartOnPartnerProductsAndOtherServices]
 * @property {boolean} [updatesFromKeenthemes.tipsOnStartBusinessProducts]
 */

// UserSocialNetworksModel
/**
 * @typedef {Object} UserSocialNetworksModel
 * @property {string} linkedIn
 * @property {string} facebook
 * @property {string} twitter
 * @property {string} instagram
 */

// UserModel
/**
 * @typedef {Object} UserModel
 * @property {number} id
 * @property {string} username
 * @property {string} [password]
 * @property {string} email
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} [fullname]
 * @property {string} [occupation]
 * @property {string} [companyName]
 * @property {string} [phone]
 * @property {number[]} [roles]
 * @property {string} [pic]
 * @property {'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'} [language]
 * @property {string} [timeZone]
 * @property {string} [website]
 * @property {UserEmailSettingsModel} [emailSettings]
 * @property {AuthModel} [auth]
 * @property {UserCommunicationModel} [communication]
 * @property {UserAddressModel} [address]
 * @property {UserSocialNetworksModel} [socialNetworks]
 */
