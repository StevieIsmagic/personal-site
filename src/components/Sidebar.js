import React from 'react';

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <div id="sidedrawer" class="mui--no-user-select">
        <div id="sidedrawer-brand" class="mui--appbar-line-height">
  <span class="mui--text-title">Brand.io</span>
</div>
<div class="mui-divider"></div>
<ul>
  <li>
    <strong>Category 1</strong>
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </li>
  <li>
    <strong>Category 2</strong>
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </li>
  <li>
    <strong>Category 3</strong>
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </li>
</ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;