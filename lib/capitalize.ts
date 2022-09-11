import capitalize from "capitalize";

export type CapitalizeOptions = ({
  preserve?: boolean;
  wordByWord?: false;
  skipWord?: undefined;
}) | ({
  preserve?: boolean;
  wordByWord: true;
  skipWord?: ((str: string) => boolean)|RegExp;
} | boolean);

function capitalizeString(opts: CapitalizeOptions|boolean): string {
  if(typeof opts == "object" && opts.wordByWord) {
    return capitalize.words(this, opts as any);
  }
  return capitalize(this, opts as any);
}

// for future spec
(String as any).prototype.capitalize = (String as any).prototype.capitalize || capitalizeString;
(String as any).prototype.capitalizeOverride = capitalizeString;
