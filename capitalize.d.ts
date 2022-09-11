interface String {
  capitalize(opts?: {preserve?: boolean; skipWords?: string}): string;
  capitalizeOverride(opts?: {preserve?: boolean; skipWords?: string}): string;
}
