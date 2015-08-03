/**
* @file artifact.image.page.js
*/

var ArtifactImagePage = function () {

  // Define image artifact page object attributes.
  this.mainElements = {

    // Form main elements.
	  uriField : element(by.css('#pece-artifact-image-node-form #edit-field-pece-uri-und-0-value')),
    textField : element(by.css('#pece-artifact-image-node-form #edit-body-und-0-value_ifr')),
    fieldsiteField : element(by.css('#pece-artifact-image-node-form #edit-field-pece-fieldsite-und-0-target-id')),
    contributorsFields : element(by.css('#pece-artifact-image-node-form #edit-field-pece-contributors-und-0-target-id')),
    tagsField : element(by.css('#pece-artifact-image-node-form #edit-field-pece-tags-und')),
    licenceField : element(by.css('#pece-artifact-image-node-form #edit-field-pece-license-und-0-licence')),

    // Right side form elements.
    publishedOnDateField : element(by.css('#pece-artifact-image-node-form .radix-layouts-sidebar #edit-pubdate-datepicker-popup-0')),
    createNewRevisionField : element(by.css('#pece-artifact-image-node-form .radix-layouts-sidebar #edit-log')),
    authorField : element(by.css('#pece-artifact-image-node-form .radix-layouts-sidebar #edit-name')),
    dateField : element(by.css('#pece-artifact-image-node-form .radix-layouts-sidebar #edit-date-datepicker-popup-0'))
  };

  this.editorSelectField = element(by.css('#edit-body-und-0-format--2'));
  this.plaintextOption = element(by.css('#edit-body-und-0-format--2 option[value="plain_text"]'));
  this.publishButton = element(by.css('#edit-submit'));

	//Define image pageobject methods.
	this.get = function () {
    browser.get('node/add/pece-artifact-image');
  };

  this.checkMainElementsPresence = function () {
    for (var key in this.mainElements) {
      browser.driver.sleep(2000);
      expect(this.mainElements[key].isPresent()).toBe(true);
    }
  };

  this.add = function (imageText) {
    browser.driver.sleep(100);
    this.mainElements.uriField.sendKeys('uri1');
    browser.driver.sleep(100);
    this.editorSelectField.click();
    browser.driver.sleep(1000);
    this.plaintextOption.click();
    browser.driver.sleep(1000);
    element(by.css('#edit-body-und-0-value')).sendKeys(imageText);
    browser.driver.sleep(100);
    this.publishButton.click();
    browser.driver.sleep(1000);
  };

};

module.exports = new ArtifactImagePage();