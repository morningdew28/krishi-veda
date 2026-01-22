import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/ui/shadcn-io/navbar-01";
import {
  Check,
  CheckCircle2,
  Droplets,
  MapPin,
  Radar,
  ShieldCheck,
  Sprout,
  Tractor,
} from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <Card className="w-full max-w-2xl p-0 shadow-lg">
        {/* --- HEADER --- */}
        <CardHeader className="bg-primary/5 border-border border-b pt-5">
          <div className="mb-2 flex items-baseline gap-2">
            <div className="text-xl">
              <Logo />
            </div>
            <h2 className="text-primary text-xl font-bold tracking-tight">
              KrishiVeda
            </h2>
          </div>
          <CardTitle className="text-2xl">Digital Twin Onboarding</CardTitle>
          <CardDescription>
            Onboarding for analyzing farm shapes and generating initial data for
            the digital twin of the farm.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 pt-8">
          {/* --- SECTION 1: FARMER ID --- */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <Tractor className="h-4 w-4" /> Farmer Identification
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="e.g. Rajesh Kumar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="example@website.com"
                  type="email"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* --- SECTION 2: GEOGRAPHY & SIZE --- */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <MapPin className="h-4 w-4" /> Location & Topography
            </h3>

            <div className="space-y-2">
              <Label htmlFor="location">Farm Location / Village Name</Label>
              <Input
                id="location"
                placeholder="e.g. Sausar Tehsil, Chhindwara District"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="size">Farm Size (Hectares)</Label>
                <Input id="size" type="number" placeholder="0.00" step="0.1" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="soil">Soil Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Soil Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black-cotton">
                      Black Cotton Soil (Regur)
                    </SelectItem>
                    <SelectItem value="red-loam">Red Loam</SelectItem>
                    <SelectItem value="alluvial">Alluvial</SelectItem>
                    <SelectItem value="clay">Heavy Clay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          {/* --- SECTION 3: CROP & METHODOLOGY --- */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <Droplets className="h-4 w-4" /> Crop & Inputs
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="variety">Corn Variety</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Variety" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pioneer">Pioneer (Hybrid)</SelectItem>
                    <SelectItem value="monsanto">
                      Dekalb (High Yield)
                    </SelectItem>
                    <SelectItem value="desi">
                      Desi (Local Indigenous)
                    </SelectItem>
                    <SelectItem value="sweet">Sweet Corn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Label>Primary Irrigation Source</Label>
              <RadioGroup
                defaultValue="rainfed"
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rainfed" id="rainfed" />
                  <Label htmlFor="rainfed" className="font-normal">
                    Rainfed (Monsoon Dependent)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tube" id="tube" />
                  <Label htmlFor="tube" className="font-normal">
                    Tube Well / Groundwater
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="canal" id="canal" />
                  <Label htmlFor="canal" className="font-normal">
                    Canal / Surface Water
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Separator />
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <ShieldCheck className="h-4 w-4" /> Service Tier
            </h3>

            <RadioGroup
              defaultValue="basic"
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {/* Option 1: Basic */}
              <div>
                <RadioGroupItem
                  value="basic"
                  id="basic"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="basic"
                  className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-full cursor-pointer flex-col justify-between rounded-md border-2 p-4 transition-all"
                >
                  <div className="mb-2 space-y-1">
                    <Sprout className="mb-2 h-6 w-6 text-green-600" />
                    <div className="font-semibold">Basic</div>
                    <p className="text-muted-foreground text-xs">
                      Soil Sensors + Satellite Imaging
                    </p>
                  </div>
                  <div className="text-primary mt-2 text-xs font-medium">
                    Essential Data
                  </div>
                </Label>
              </div>

              {/* Option 2: Advanced */}
              <div>
                <RadioGroupItem
                  value="advanced"
                  id="advanced"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="advanced"
                  className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-full cursor-pointer flex-col justify-between rounded-md border-2 p-4 transition-all"
                >
                  <div className="mb-2 space-y-1">
                    <Check className="mb-2 h-6 w-6 text-blue-600" />
                    <div className="font-semibold">Advanced</div>
                    <p className="text-muted-foreground text-xs">
                      + AI Insect & Disease Detection + Scheduled Drone
                      Monitoring
                    </p>
                  </div>
                  <div className="text-primary mt-2 text-xs font-medium">
                    Crop Health
                  </div>
                </Label>
              </div>

              {/* Option 3: Expert */}
              <div>
                <RadioGroupItem
                  value="expert"
                  id="expert"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="expert"
                  className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-full cursor-pointer flex-col justify-between rounded-md border-2 p-4 transition-all"
                >
                  <div className="mb-2 space-y-1">
                    <Radar className="mb-2 h-6 w-6 text-purple-600" />
                    <div className="font-semibold">Expert</div>
                    <p className="text-muted-foreground text-xs">
                      + Large Animal Proximity Alerts
                    </p>
                  </div>
                  <div className="text-primary mt-2 text-xs font-medium">
                    Full Security
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="border-border bg-primary/5 flex justify-end rounded-b-xl border-t p-6 dark:bg-slate-900">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
                size="sm"
              >
                Request Farm Profiling
              </Button>
            </DialogTrigger>

            {/* The Modal Content */}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <div className="mb-2 flex flex-col items-center gap-2">
                  <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <DialogTitle>Request Received</DialogTitle>
                </div>
                <DialogDescription className="pt-2 text-center">
                  Our team will contact you shortly to verify your farm
                  boundaries and finalize your digital twin configuration.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="mt-4 sm:justify-center">
                {/* This button actually navigates to the dashboard */}
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}
