import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter 
  } from "@/shared/components/ui/card";
  import { badgeVariants } from "@/shared/components/ui/badge"
  import { 
    LayoutDashboard, 
    Users, 
    Settings, 
    Package, 
    BarChart2, 
    Bell 
  } from "lucide-react";
  import { Button } from "@/shared/components/ui/button";
  import { Separator } from "@/shared/components/ui/separator";
  import { Badge } from "@/shared/components/ui/badge";
  
  export default function Catalog() {
    // Mock data - replace with real data in your implementation
    const stats = [
      { label: "Total Users", value: "1,234", icon: Users },
      { label: "Active Products", value: "567", icon: Package },
      { label: "This Month's Revenue", value: "$34,567", icon: BarChart2 },
      { label: "Pending Actions", value: "12", icon: Bell, badge: "warning" },
    ];
  
    return (
      <main className="flex min-h-screen flex-col">
        <header className="bg-background border-b">
          <div className="container flex h-16 items-center justify-between px-4">
            <h1 className="text-lg font-semibold">Панель администратора</h1>
            <nav>
              <Button variant="ghost" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Настройки
              </Button>
            </nav>
          </div>
        </header>
  
        <div className="flex flex-1">
          <aside className="hidden w-64 border-r bg-muted/40 md:block">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Products
                  </Button>
                </li>
              </ul>
            </nav>
          </aside>
  
          <section className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-muted-foreground">
                Welcome back, admin. Here's what's happening with your platform.
              </p>
            </div>
  
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.label}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      {stat.badge && (
                        <Badge variant={"outline"} className="mt-2">
                          Attention needed
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
  
            <Separator className="my-6" />
  
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest actions on your platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Replace with actual activity data */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">New user registered</p>
                        <p className="text-sm text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Product updated</p>
                        <p className="text-sm text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View all activity
                  </Button>
                </CardFooter>
              </Card>
  
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common admin tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Add New User
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Package className="mr-2 h-4 w-4" />
                      Add New Product
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      System Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    );
  }