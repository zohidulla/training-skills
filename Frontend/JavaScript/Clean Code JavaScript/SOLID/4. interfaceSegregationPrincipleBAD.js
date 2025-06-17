class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.settings.animationModule.setup();
  }

  traverse() {
    // ...
    this.settings.animationModule.animate();
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule: {
    setup() {
      // init animation
    },
    animate() {
      // Most of the time, we won't need to animate when traversing.
    },
  },
  // ...
});
