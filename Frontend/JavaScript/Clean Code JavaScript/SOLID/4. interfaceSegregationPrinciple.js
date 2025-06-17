class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options ?? {};
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      this.options.animationModule.setup();
    }
    // other options init
  }

  traverse() {
    // ...
    console.log(this.options.animationModule); // undefined for traverserWithoutAnimation
    if (this.options.animationModule) {
      this.options.animationModule.animate();
      console.log('ANIMATING');
    }
  }
}

const options = {
  animationModule: {
    setup() {
      // init animation
    },
    animate() {
      // Most of the time, we won't need to animate when traversing.
    },
  },
};

const baseSettings = {
  rootNode: document.getElementsByTagName('body'),
};

const traverserWithAnimation = new DOMTraverser({ ...baseSettings, options });
traverserWithAnimation.traverse(); // animation

const traverserWithoutAnimation = new DOMTraverser({
  ...baseSettings,
  // options: {},
});
traverserWithoutAnimation.traverse(); // no animation!
