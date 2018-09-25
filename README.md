[![Build Status](https://travis-ci.org/leon19/test-repo.svg?branch=master)](https://travis-ci.org/leon19/test-repo)
[![Coverage Status](https://coveralls.io/repos/github/leon19/test-repo/badge.svg?branch=feature%2Fcoveralls)](https://coveralls.io/github/leon19/test-repo?branch=feature%2Fcoveralls)
[![npm version](https://badge.fury.io/js/test-repo.svg)](https://www.npmjs.com/package/test-repo)

# Test Repo

# SMART xAPI DSL

## Index

- [Activity](#activity)

## Type aliases

<a id="activity"></a>

### Activity

**Ƭ Activity**: _ [BaseActivity](interfaces/baseactivity.md) &#124; [InteractionActivity](#interactionactivity) _

_Defined in node_modules/@gradiant/xapi-dsl/types/object/activity/activity.d.ts:9_

If it were possible to use the same id for two different Activities, the validity of Statements about these Activities could be questioned.
This means an LRS can't ever treat (references to) the same Activity id as belonging to two different Activities, even if it thinks this was
intended. Namely, when a conflict with another system occurs, it’s not possible to determine which Activity is intended.

---
