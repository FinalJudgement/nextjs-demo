import NextAuth, { AuthOptions } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"


export const authOptions: AuthOptions = {
    providers: [
        AzureADProvider({
            clientId: process.env.AUTH_AZURE_AD_ID || "",
            clientSecret: process.env.AUTH_AZURE_AD_SECRET || "",
            tenantId: process.env.AUTH_AZURE_AD_TENANT_ID,
        }),
    ]
}
export default NextAuth(authOptions)