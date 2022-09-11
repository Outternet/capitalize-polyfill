/// <reference types="../index" />
import * as assert from "assert";
import "../dist/capitalize";

assert.equal("hello".capitalize(), "Hello");
assert.equal("hello".capitalizeOverride(), "Hello");
assert.equal("helloYou".capitalizeOverride(), "Helloyou");
assert.equal("helloYou".capitalizeOverride(true), "HelloYou");
assert.equal("helloYou".capitalizeOverride(false), "Helloyou");
assert.equal("helloYou".capitalizeOverride({preserve: true}), "HelloYou");
assert.equal("helloYou".capitalizeOverride({preserve: false}), "Helloyou");
assert.equal("hellos for you".capitalizeOverride({wordByWord: true}), "Hellos For You");
assert.equal("hellos For You".capitalizeOverride({wordByWord: true, skipWord: /[a-g]/}), "Hellos for You");

console.log("Test finished successfully.");