class UserAuth {
  areCredentialsVerified() {
    console.log('Verifying credentials...');
    return true; // simulating succefful user verification
  }
}

class UserSettings {
  constructor(user) {
    this.options = user.options;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.areCredentialsVerified()) {
      console.log('Changing settings...');
      this.options = { ...this.options, ...settings };
    }
  }
}

class User {
  constructor(user) {
    this.name = user.name;
    this.settings = new UserSettings(user);
  }

  displayName() {
    console.log(this.user.name);
  }
}

const myself = new User({ name: 'Bogdan', options: { isInstructor: true } });

console.log(myself);
myself.settings.auth.areCredentialsVerified();
myself.settings.changeSettings({
  isRecordingCourse: true,
});
console.log(myself);
