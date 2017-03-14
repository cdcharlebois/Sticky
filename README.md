![badge](https://img.shields.io/badge/mendix-6.10.3-green.svg)

# Pin (Sticky Header)

Widget allows you to pin an element to your page, so it sticks to the top of the browser window when the user scrolls.

### Installation

1. Install the widget in your project
2. Include the widget on a page **as a sibling of the element to pin**
3. Configure the widget's settings:
    1. On the **General** tab, Configure:
        1. `Selector` : set to the CSS selector or Mendix name of the element to Pin
        2. `Is Mx Name` : set to "Yes" if you specified a Mendix name for `Selector`, else "No"
    2. On the **Behavior** tab, optionally configure:
        1. `Minimum Width` : Set the minimum screen width to apply the pinning functionality
        2. `Top Padding` : Extra padding to add to the top of the element while pinned
        2. `Bottom Padding` : Extra padding to add to the bottom of the element while pinned
        3. `Active Class` : Set a class on the element when pinned

### Typical usage scenario

Useful for if you want to always show a helpful hint or column headers on a table, etc

### Known Limitations

- the page layout must be a scroll container set to **Full Widget** scroll behavior, otherwise the widget will do nothing :sob:

###### Based on the Mendix Widget Boilerplate

See [AppStoreWidgetBoilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate/) for an example
