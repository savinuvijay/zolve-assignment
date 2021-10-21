# Zolve Assignments

## Live Demo

For Live Demo: https://zolve-assignments.netlify.app/

## Sections

### 3rd Party API & Visualization

Consumes the stackOverflow JSON API and displays a Bar Chart showing the the language on x-axis and count of tags on y-axis.

View API Response: https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow.

View API Documentation: https://api.stackexchange.com/docs/tags#pagesize=30&order=desc&sort=popular&filter=default&site=stackoverflow&run=true

The filters present next to the chart can be set accordingly to filter down the data displayed.

### Copy to clipboard

Text can be entered into the first input box.

The second input box is not editable. It is used to display the extracted text.

When a URL with params key name ‘q’ is entered, its value is displayed in the second input box.

If **http://localhost:3000?q=ABC** is entered, **ABC** will be loaded in the text box.

Its value will be copied to clipboard on clicking the copy button.

### Selfie

User is able to see the live feed from there selfie camera on screen once the permissions are granted.

On clicking **'Capture'** button, the current frame is grabbed and saved.

The user may **'Retake'** the photo if not satified with the grab.

The user can crop the image to a 1:1 ratio by clicking and draggin on the image.

#### Supported Filters

-   1. Fromdate
-   2. Todate
-   3. Pagesize
-   4. Page

## Libraries Used

-   [Create React App](https://github.com/facebook/create-react-app).
-   [ChartJS](https://www.chartjs.org)
-   [React Webcam](https://www.npmjs.com/package/react-webcam)
-   [React Image Crop](https://www.npmjs.com/package/react-image-crop)

## Author

-   [@savinuvijay](https://github.com/savinuvijay)
