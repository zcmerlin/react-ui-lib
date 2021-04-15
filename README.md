# react-component-library

Starter repo for developing a react date picker component

## Get started

Clone the repository to your local machine, then install the dependencies:

```
yarn install
```

Start storybook

```
yarn storybook
```

In the repository there're existing components. Button, Icon and Dropdown which will be used in the InputDatePicker component.

# keyboard operation method

- when input is focused, arrow down -> open picker
- when picker is popuped, esc -> close picker & focus input
- when picker is popuped, arrow down -> focus on date/month
- when date is focused, switch date by direction key
- page up/page down, switch month
- Home/End, focused on the first/last day of current month
