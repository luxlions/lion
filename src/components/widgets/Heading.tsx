import { component$ } from '@builder.io/qwik';
import { Separator } from '../ui/Separator';
import type { JSXOutput } from '@builder.io/qwik';

interface HeadingProps {
  title: string;
  subtitle?: string;  // Made optional with ?
  icon?: JSXOutput;
}

export default component$<HeadingProps>(({ title, subtitle, icon }) => {
  return (
    <div>
      <div class="flex items-center gap-2 px-0 justify-between space-y-1">
        <div>
          <div class="flex items-center">
            <h4 class="text-4xl md:text-6xl pl-0 pb-1 pt-2 font-medium leading-none text-white">
              {title}
            </h4>
          </div>
          {subtitle && (  // Only render if subtitle exists
            <p class="text-md md:text-lg ml-3 pb-1 text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {icon && (
          <div class="flex items-center mr-3 text-[#70C7BA]">
            {icon}
          </div>
        )}
      </div>
      <Separator class="mt-1 mb-4" />
    </div>
  );
});