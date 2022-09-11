interface String {
  capitalize(opts?: {preserve?: boolean; skipWords?: string|RegExp}|boolean): string;
  capitalizeOverride(opts?: {preserve?: boolean; skipWords?: string|RegExp}|boolean): string;
}
