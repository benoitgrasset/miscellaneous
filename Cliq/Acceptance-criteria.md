## Summary

DPM portals are white-label products that provide the same basic functionality with slight variations in presentation.

A user interface for configuring DPM page templates will allow administrators to easily decide which content to display to users and in what way, possibly without the need for additional design and development.



## User story

As an administrator,
I want to configure the page templates of a portal,
So that I can customize how content is presented to users.



## Acceptance criteria

### Scenario AC1 - The administrator creates a page template configuration for a portal.

#### AC1.1

Given I selected a portalAnd I selected a page template

When I request to create a page template configuration for the portal

Then I should see the page template configuration user interface And I should see a list of available components to configure the page template with And I should see a preview of the configured page template And I should see an action to save the page template configuration

### Scenario AC2 - The administrator manages the components of the page template configuration.

#### AC2.1

Given I configured the page template with at least one component

When I request to configure a component in the page template configuration

Then I should see options to change the component’s properties And I should see an option to remove the component from the page template configuration And I should see an option to move the component to a different position in the page template configuration

#### AC2.2

When I request to change the component’s properties

Then I should see the change reflected in the preview of the configured page template

#### AC2.3

When I request to remove the component from the page template configuration

Then I should see the component removed in the preview of the configured page template

#### AC2.4

When I request to move the component to a different position in the page template configuration

Then I should see the component moved to chosen position in the preview of the configured page template And I should see the component keep the same properties as before the move

### Scenario AC3 - The administrator saves the page template configuration.

#### AC3.1

Given I created a valid page template configuration

When I request to save the page template configuration

Then I should see that the page template configuration was saved

### Scenario AC4 - The administrator edits a page template configuration.

#### AC4.1

Given I previously saved a page template configuration

When I request to open the page builder for that page template configuration

Then I should continue working from the last saved page template configuration
