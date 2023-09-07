import Image from 'next/image';
import Placeholder1 from '@/../public/images/placeholder/Frame159.png';
import Placeholder2 from '@/../public/images/placeholder/Frame160.png';
import Placeholder3 from '@/../public/images/placeholder/Frame161.png';
import Placeholder4 from '@/../public/images/placeholder/Frame162.png';
import { AltCard, OutlinedCard, ProductCard } from '@/components/ui/Cards';
import { VoolButton } from '@/components/ui/Buttons';

export default function Home() {
  return (
    <main className="px-5 md:px-16 pt-10 pb-32">
      <section>
        <div className="flex flex-row gap-x-5 justify-center">
          <Image src={Placeholder1} alt="none" height={480} />
          <div className="flex flex-col justify-between gap-y-1">
            <h1>
              Shop with us at{' '}
              <span className="bg-vool-orange text-white p-1">Vool</span>
            </h1>
            <Image src={Placeholder4} alt="none" width={710} />
            <div className="flex flex-row justify-between gap-x-2">
              <Image src={Placeholder3} alt="none" height={233} />
              <Image src={Placeholder2} alt="none" height={233} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div>
          <div className="flex justify-between">
            <h2>New Arrivals</h2>
            <p className="text-lg">1 of 3</p>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex justify-center mt-4">
              <VoolButton text="See More" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="h-96">
          <div className="flex justify-between">
            <h2>On Sale</h2>
            <p className="text-lg">Arrows</p>
          </div>
          <div>
            <AltCard />
          </div>
          <div className="flex justify-center mt-4">
            <VoolButton text="See More" />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex justify-between">
          <OutlinedCard>
            <div className="w-fit absolute top-1/2 center-y-absolute center-x-absolute h-fit">
              <VoolButton
                text="Shop Male"
                className="bg-opacity-0 border border-white"
              />
            </div>
          </OutlinedCard>
          <OutlinedCard>
            <div className="w-fit absolute top-1/2 center-y-absolute center-x-absolute h-fit">
              <VoolButton
                text="Shop Female"
                className="bg-opacity-0 border border-white"
              />
            </div>
          </OutlinedCard>
        </div>
      </section>

      <section className="mt-20">
        <div>
          <div className="flex justify-between">
            <h2>New Arrivals</h2>
            <p className="text-lg">1 of 3</p>
          </div>
          <div>
            <div className="flex flex-row gap-x-5">
              <div>
                <OutlinedCard className="rounded-lg outline-[1.5px] w-96" />
                <h3>Jackets</h3>
              </div>
              <div>
                <OutlinedCard className="rounded-lg outline-[1.5px] w-96" />
                <h3>Hoodies</h3>
              </div>
              <div>
                <OutlinedCard className="rounded-lg outline-[1.5px] w-96" />
                <h3>T-Shirt</h3>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <VoolButton text="See More" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
