import Tabs from './Tabs';
import TabsList from './TabsList';
import TabsTrigger from './TabsTrigger';
import TabsContent from './TabsContent';

const TabsCompound = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default TabsCompound;

export { Tabs, TabsList, TabsTrigger, TabsContent };
