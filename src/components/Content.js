import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <aside className="flex-item flex-container main">
        {/* router-outlet */}
        <section>
          <h3>This is Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare mauris quis magna posuere, ut posuere tellus feugiat. Ut lacus mi, consectetur in ligula quis, venenatis mattis ante. Suspendisse finibus fringilla elit et congue.</p>
          <p>Suspendisse vel imperdiet nunc. Donec mattis, nisi nec rhoncus fermentum, enim felis ullamcorper enim, quis convallis est nibh commodo purus. Maecenas id faucibus nunc. Maecenas vestibulum mollis mauris, sed pretium est vehicula in. Ut id massa id augue ornare suscipit eget sit amet est. Phasellus eget est turpis. </p>
          <p>Ut id massa interdum, lobortis nisl scelerisque, dapibus ante. Suspendisse potenti. Mauris nisi arcu, pulvinar a urna eu, ultricies molestie lacus. Mauris interdum dapibus elit, non laoreet felis condimentum venenatis. Nullam lectus arcu, convallis in accumsan et, venenatis lacinia nibh. Phasellus quis bibendum metus. Vestibulum iaculis est vel elit lobortis, sit amet sagittis urna dignissim. Aenean eget dui pharetra, tincidunt lectus a, gravida ligula. Maecenas porttitor facilisis lorem, ornare volutpat lectus lobortis quis. Curabitur sollicitudin est id arcu egestas rutrum ut non massa. Nulla auctor, nibh sit amet ornare ultrices, diam mauris dapibus leo, vel suscipit arcu eros et tellus. Suspendisse consequat gravida suscipit.</p>
        </section>
        {/* router-outlet */}
      </aside>
    );
  }
}

export default Content;
