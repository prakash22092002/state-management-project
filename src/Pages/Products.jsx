import ProductImage from "../assets/images/ProductImage";

const Products = () => {
    return (
        <section className="section-product py-12 px-4">
            <div className="flex justify-center items-center flex-col space-y-6">
                {/* Responsive Image */}
                <div className="w-full max-w-[220px] md:max-w-[300px] lg:max-w-[380px]">
                    <ProductImage className="w-full h-auto object-contain" />
                </div>

                {/* Coming Soon Message */}
                <h2 className="text-xl md:text-2xl font-semibold text-gray-400 text-center">
                    Products Section Coming Soon!
                </h2>
            </div>
        </section>
    );
};

export default Products;
