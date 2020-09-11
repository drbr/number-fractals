declare module "written-number" {

  function writtenNumber(
    numericValue: number,
    options: WrittenNumberOptions,
   ): string;

   export = writtenNumber;

   export type WrittenNumberOptions = {
    /**
     * Could be string or object. Defaults to 'en'. Determines which language to use. An i18n
     * configuration object may be passed to support external language definitions.
     */
    lang?: 'en' | 'pt' | 'ptPT' | 'es' | 'fr' | 'eo' | 'vi' | 'ar' | 'tr' | 'enIndian' | 'uk' | 'id';

    /**
     * Defaults to `false`. Determines whether to use a separator. The separator is
     * internationalized.
     */
    noAnd?: boolean;
  }
}
