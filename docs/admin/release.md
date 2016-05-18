Release
=======

This document outlines the release process.



Change log
==========

Ensure all changes are summarised within `/CHANGELOG.md` under `Unreleased`.

The following diff command will help to highlight all changes;

    git diff master develop

Group changes to describe their impact;

- Added - New feature added
- Changed - Stable feature changed
- Deprecated - Stable feature removed
- Removed - Deprecated feature completely removed
- Fixed - Include description of bug fixed
- Security - Include description of vulnerability fixed

Order changes within each group from high impact to low impact.



Semantic version
================

Decide on a new [semantic version number](http://semver.org/) based on the changes.

Increment the;
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

The remaining documentation refers to `{{version}}`, which must include a 'v' prefix and two dots.



Branch
======

```
git flow release start {{version}}
```



Update version
==============

Within `/CHANGELOG.md`, change the 'Unreleased' heading to the new version number and release date.

Update the version number in `/package.json`.

```
git add -A
git commit -m "Bump version"
```



Reset dependencies
==================

```
rm npm-shrinkwrap.json
npm run reset-deps
npm shrinkwrap --dev
```

Check and validate changes in `npm-shrinkwrap.json`

If changes detected;

```
git add -A
git commit -m "Update dependencies"
```



Test
====

- `npm run clean`
- `npm run reset-deps`
- `npm run test`



Finish & publish
=================

```
git flow release finish {{version}}
git push --tags
git checkout master
git push
git checkout develop
git push
```

Message for new version: `:tada: {{version}}`

Message for version tag: `:bookmark: {{version}}`



Reset change log
================

Add the following heading just above the new version within `/CHANGELOG.md`

```
Unreleased
----------
```

This encourages change log activity during development.

```
git checkout develop
git add CHANGELOG.md
git commit -m ":books: Prepare change log to track unreleased changes"
git push
```
