/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-image` command */
  export type SearchImage = ExtensionPreferences & {
  /** Moderate Search - Moderate the search results */
  "moderate": boolean
}
}

declare namespace Arguments {
  /** Arguments passed to the `search-image` command */
  export type SearchImage = {}
}
