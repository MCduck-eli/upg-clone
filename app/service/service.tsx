import IProducts from "@/types/get-products";
import { request, gql } from "graphql-request";

const graphqlAPI =
    "https://us-west-2.cdn.hygraph.com/content/cmlatycv501m006unyv6lum9j/master";

export const getService = {
    async GetPosts() {
        const query = gql`
            query MyProducts {
                contects {
                    slug
                    title
                    brend
                    price
                    image {
                        url
                    }
                }
            }
        `;

        try {
            const result = await request<{ contects: IProducts[] }>(
                graphqlAPI,
                query,
            );

            return result.contects;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },

    async GetDetails() {
        const query = gql`
            query MyDetails {
                bestDetailes {
                    brand
                    image {
                        url
                    }
                    price
                    slug
                    title
                }
            }
        `;
        try {
            const result = await request<{ bestDetailes: IProducts[] }>(
                graphqlAPI,
                query,
            );
            return result.bestDetailes;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },

    async getComponents() {
        const query = gql`
            query MyComponents {
                components {
                    image {
                        url
                    }
                    slug
                    title
                }
            }
        `;
        try {
            const result = await request<{ components: IProducts[] }>(
                graphqlAPI,
                query,
            );
            return result.components;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
};
