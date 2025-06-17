interface AnimationModule {
  setup(): void;
  animate(): void;
}

interface DOMTraverserSettings {
  rootNode: HTMLElement | HTMLCollectionOf<HTMLElement>;
  options?: {
    animationModule?: AnimationModule;
    // Other options can be added here
  };
}

interface DOMTraverserInterface {
  settings: DOMTraverserSettings;
  rootNode: HTMLElement | HTMLCollectionOf<HTMLElement>;
  options: { animationModule?: AnimationModule };

  setup(): void;
  setupOptions(): void;
  traverse(): void;
}

class DOMTraverser implements DOMTraverserInterface {
  settings: DOMTraverserSettings;
  rootNode: HTMLElement | HTMLCollectionOf<HTMLElement>;
  options: { animationModule?: AnimationModule };

  constructor(settings: DOMTraverserSettings) {
    this.settings = settings;
    this.options = settings.options ?? {};
    this.setup();
  }

  setup(): void {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions(): void {
    if (this.options.animationModule) {
      this.options.animationModule.setup();
    }
    // Other options initialization
  }

  traverse(): void {
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
    setup(): void {
      // init animation
    },
    animate(): void {
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
