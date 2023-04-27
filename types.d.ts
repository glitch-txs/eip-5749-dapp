/**
 * Represents the assets needed to display a wallet
 */
interface ProviderInfo {
  /**
   * A UUIDv4 unique to the wallet provider.
   *
   * This must remain the same across versions but must be different across channels. For example, MetaMask, Trust wallet and Enkrypt should each have different UUIDs, but MetaMask 10.22.2 and MetaMask 9.8.1 should have the same UUID.
   *
   * @readonly
   */
   uuid: string;
   /**
    * The name of the wallet provider (e.g. `MetaMask` or `Enkrypt`)
    *
    * @readonly
    */
   name: string;
   /**
    * A base64 encoded SVG image.
    *
    * Base64 is defined in RFC 4648.
    *
    * @readonly
    */
   icon: `data:image/svg+xml;base64,${string}`;
   /**
    * A description of the wallet provider.
    *
    * @readonly
    */
   description: string;
}

/* Type EIP1193Provider is documented at EIP-1193 */
interface EIP1193Provider {
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  request?: (request: { method: string, params?: Array<any> }) => Promise<any>
}

/**
 * Represents the new Provider with info type that extends the EIP1193 provider
 */
interface ProviderWithInfo extends EIP1193Provider {
  info: ProviderInfo;
}

/**
 * The type of `window.evmproviders`
 */
interface EVMProviders {
  /**
   * The key is RECOMMENDED to be the name of the extension in snake_case. It MUST contain only lowercase letters, numbers, and underscores.
   */
  [index: string]: ProviderWithInfo;
}