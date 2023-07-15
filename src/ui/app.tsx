import Content from '@/ui/components/Content';
import Navbar from '@/ui/components/Navbar';
import { contentTypes } from '@/ui/utils/data';
import { Messenger } from '@/ui/utils/messenger';
import { activeTab } from '@/ui/utils/states';

export function App() {
  return (
    <>
      <Navbar />
      <main class="w-full my-2">
        <section class="[&>button:not(&>button:last-child)]:border-b [&>button:not(&>button:last-child)]:border-b-neutral-400/40">
          {contentTypes
            // .filter((ct) => ct.group?.includes(activeTab.value))
            .map((content) => (
              <Content
                name={content.name}
                description={content.description}
                onClick={() => Messenger.fillText(content.contents)}
              />
            ))}
        </section>
      </main>
    </>
  );
}
