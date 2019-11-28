/* global prompt */

exports.name = prompt('Project Name', 'ulysses-app', (name) => name.split(' ').join('-').toLowerCase());

exports.repository = prompt(
  'GitHub [username/repository]',
  'HackerYou/project-repo',
  (data) => {
    const [username, repository] = data.split('/');

    // Mutate the global `this` object
    Object.assign(this, { context: { username, repository } });

    const repoObject = {
      type: 'git',
      url: `git+https://github.com/${username}/${repository}.git`,
    };
    return repoObject;
  }
);

exports.author = prompt('Author', '', (author) => author);

exports.scripts = (cb) => {
  const { package: { scripts: currentScripts }, context } = this;
  const { username, repository } = context;
  const scripts = {
    'git:remote:set': `git remote set-url origin https://github.com/${username}/${repository}.git`,
    'git:remote:create': `git remote add origin https://github.com/${username}/${repository}.git`
  };

  // Remove inital scripts
  delete currentScripts.init;
  delete currentScripts.postinit;

  cb(null, Object.assign({}, currentScripts, scripts));
};
