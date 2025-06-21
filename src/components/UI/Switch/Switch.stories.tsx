import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./index";
import { Label } from "../Label";

/**
 * Switch component provides toggle functionality with on/off states.
 * Built on Radix UI Switch primitive with accessibility support.
 */
const meta = {
 title: "UI/Switch",
 component: Switch,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  checked: {
   control: "boolean",
   description: "Whether the switch is checked",
  },
  disabled: {
   control: "boolean",
   description: "Whether the switch is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default switch
 */
export const Default: Story = {
 args: {
  checked: false,
 },
};

/**
 * Checked switch
 */
export const Checked: Story = {
 args: {
  checked: true,
 },
};

/**
 * Disabled switch
 */
export const Disabled: Story = {
 args: {
  disabled: true,
  checked: false,
 },
};

/**
 * Disabled and checked
 */
export const DisabledChecked: Story = {
 args: {
  disabled: true,
  checked: true,
 },
};

/**
 * With label
 */
export const WithLabel = {
 render: () => (
  <div className="flex items-center space-x-2">
   <Switch id="airplane-mode" />
   <Label htmlFor="airplane-mode">Airplane mode</Label>
  </div>
 ),
};

/**
 * Interactive switch
 */
export const Interactive = {
 render: () => {
  const [enabled, setEnabled] = useState(false);

  return (
   <div className="space-y-4">
    <div className="flex items-center space-x-2">
     <Switch
      id="interactive-switch"
      checked={enabled}
      onCheckedChange={setEnabled}
     />
     <Label htmlFor="interactive-switch">
      {enabled ? "Enabled" : "Disabled"}
     </Label>
    </div>

    <p className="text-sm text-muted-foreground">
     Status: {enabled ? "ON" : "OFF"}
    </p>
   </div>
  );
 },
};

/**
 * Settings switches
 */
export const SettingsExample = {
 render: () => {
  const [settings, setSettings] = useState({
   notifications: true,
   marketing: false,
   analytics: true,
   cookies: false,
  });

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
   setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
   <div className="space-y-6 max-w-sm">
    <h3 className="font-medium">Privacy Settings</h3>

    <div className="space-y-4">
     <div className="flex items-center justify-between">
      <div className="space-y-1">
       <Label htmlFor="notifications">Push Notifications</Label>
       <p className="text-sm text-muted-foreground">
        Receive notifications about updates
       </p>
      </div>
      <Switch
       id="notifications"
       checked={settings.notifications}
       onCheckedChange={(checked) => updateSetting("notifications", checked)}
      />
     </div>

     <div className="flex items-center justify-between">
      <div className="space-y-1">
       <Label htmlFor="marketing">Marketing Emails</Label>
       <p className="text-sm text-muted-foreground">
        Receive promotional content
       </p>
      </div>
      <Switch
       id="marketing"
       checked={settings.marketing}
       onCheckedChange={(checked) => updateSetting("marketing", checked)}
      />
     </div>

     <div className="flex items-center justify-between">
      <div className="space-y-1">
       <Label htmlFor="analytics">Analytics</Label>
       <p className="text-sm text-muted-foreground">Help improve our service</p>
      </div>
      <Switch
       id="analytics"
       checked={settings.analytics}
       onCheckedChange={(checked) => updateSetting("analytics", checked)}
      />
     </div>

     <div className="flex items-center justify-between">
      <div className="space-y-1">
       <Label htmlFor="cookies">Cookies</Label>
       <p className="text-sm text-muted-foreground">
        Store preferences locally
       </p>
      </div>
      <Switch
       id="cookies"
       checked={settings.cookies}
       onCheckedChange={(checked) => updateSetting("cookies", checked)}
      />
     </div>
    </div>

    <div className="text-xs text-muted-foreground">
     <p>Current settings:</p>
     <pre className="mt-1 bg-muted p-2 rounded">
      {JSON.stringify(settings, null, 2)}
     </pre>
    </div>
   </div>
  );
 },
};

/**
 * Form integration
 */
export const FormIntegration = {
 render: () => {
  const [formData, setFormData] = useState({
   emailNotifications: true,
   smsNotifications: false,
   pushNotifications: true,
   weeklyDigest: false,
   autoSave: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
    <h3 className="font-medium">Notification Preferences</h3>

    <div className="space-y-4">
     <div className="flex items-center justify-between">
      <Label htmlFor="email-notifications">Email Notifications</Label>
      <Switch
       id="email-notifications"
       checked={formData.emailNotifications}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, emailNotifications: checked }))
       }
      />
     </div>

     <div className="flex items-center justify-between">
      <Label htmlFor="sms-notifications">SMS Notifications</Label>
      <Switch
       id="sms-notifications"
       checked={formData.smsNotifications}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, smsNotifications: checked }))
       }
      />
     </div>

     <div className="flex items-center justify-between">
      <Label htmlFor="push-notifications">Push Notifications</Label>
      <Switch
       id="push-notifications"
       checked={formData.pushNotifications}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, pushNotifications: checked }))
       }
      />
     </div>

     <div className="flex items-center justify-between">
      <Label htmlFor="weekly-digest">Weekly Digest</Label>
      <Switch
       id="weekly-digest"
       checked={formData.weeklyDigest}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, weeklyDigest: checked }))
       }
      />
     </div>

     <div className="flex items-center justify-between">
      <Label htmlFor="auto-save">Auto Save</Label>
      <Switch
       id="auto-save"
       checked={formData.autoSave}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, autoSave: checked }))
       }
      />
     </div>
    </div>

    <button
     type="submit"
     className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md"
    >
     Save Preferences
    </button>

    <div className="text-xs text-muted-foreground">
     <p>Current preferences:</p>
     <pre className="mt-1 bg-muted p-2 rounded text-xs">
      {JSON.stringify(formData, null, 2)}
     </pre>
    </div>
   </form>
  );
 },
};

/**
 * All states
 */
export const AllStates = {
 render: () => (
  <div className="space-y-4">
   <div className="space-y-3">
    <h4 className="font-medium">Normal States</h4>
    <div className="flex items-center space-x-2">
     <Switch checked={false} />
     <Label>Off</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Switch checked={true} />
     <Label>On</Label>
    </div>
   </div>

   <div className="space-y-3">
    <h4 className="font-medium">Disabled States</h4>
    <div className="flex items-center space-x-2">
     <Switch checked={false} disabled />
     <Label className="text-muted-foreground">Disabled off</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Switch checked={true} disabled />
     <Label className="text-muted-foreground">Disabled on</Label>
    </div>
   </div>
  </div>
 ),
};

/**
 * Sizes (custom styling)
 */
export const Sizes = {
 render: () => (
  <div className="space-y-4">
   <div className="flex items-center space-x-2">
    <Switch className="scale-75" />
    <Label className="text-sm">Small switch</Label>
   </div>
   <div className="flex items-center space-x-2">
    <Switch />
    <Label>Default switch</Label>
   </div>
   <div className="flex items-center space-x-2">
    <Switch className="scale-125" />
    <Label className="text-lg">Large switch</Label>
   </div>
  </div>
 ),
};
