module.exports = {
  verifyConditions: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    {
      path: "@semantic-release/git",
      assets: [
        "CHANGELOG.md",
        "package.json",
        "package-lock.json",
        "npm-shrinkwrap.json",
      ],
      message:
        "chore(release): ${nextRelease.version} --skip \n\n${nextRelease.notes}", // eslint-disable-line
    },
  ],
  prepare: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    {
      path: "@semantic-release/git",
      assets: [
        "CHANGELOG.md",
        "package.json",
        "package-lock.json",
        "npm-shrinkwrap.json",
      ],
      message:
        "chore(release): ${nextRelease.version} --skip \n\n${nextRelease.notes}", // eslint-disable-line
    },
  ],
  publish: ["@semantic-release/github"],
};
