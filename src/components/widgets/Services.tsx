import { component$,  useStyles$ } from '@builder.io/qwik';

import { Wrapper } from './Wrapper';

import styles from './carousel.css?inline';
import Custom from './Custom';
import { Card } from '../ui/Card';
import { Tabs } from '../ui/Tabs';

export default component$(() => {
  useStyles$(styles);

 

  return (
    <>
      <Wrapper>
<Card.Root>
  <Card.Header>
    {/* <img src='' class="h-24 bg-primary"></img> */}
   <Tabs.Root class="-mt-3.5">
            <Tabs.List class="grid w-full grid-cols-4 text-xs">
              <Tabs.Tab data-value="0">
                <div class="flex flex-col items-center">
                  Color
                </div>
              </Tabs.Tab>
              <Tabs.Tab data-value="1">
                <div class="flex flex-col items-center">
                  Font
                </div>
              </Tabs.Tab>
              <Tabs.Tab data-value="2">
                <div class="flex flex-col items-center">
                  Radius
                </div>
              </Tabs.Tab>
              <Tabs.Tab data-value="3">
                <div class="flex flex-col items-center">
                  Spacing
                </div>
              </Tabs.Tab>
            </Tabs.List>
            
            <Tabs.Panel class="">
              <Card.Root class="rounded-t-none border-none">
                <Card.Content class="space-y-2 p-0">
                  <Custom/>

                </Card.Content>
              </Card.Root>
            </Tabs.Panel>
            
            <Tabs.Panel class="">
              <Card.Root class="rounded-t-none border-none">
                <Card.Content class="space-y-2 p-0">
                </Card.Content>
              </Card.Root>
            </Tabs.Panel>
            
            <Tabs.Panel>
              <Card.Root class="border-none rounded-t-none">
                <Card.Content class="space-y-2 p-0">
                </Card.Content>
              </Card.Root>
            </Tabs.Panel>
            
            <Tabs.Panel>
              <Card.Root class="rounded-t-none border-none">
                <Card.Content class="space-y-2 p-0">
                </Card.Content>
              </Card.Root>
            </Tabs.Panel>
          </Tabs.Root>

  </Card.Header>

  <Card.Content>


  </Card.Content>
         </Card.Root>    

  
      </Wrapper>
    </>
  );
});