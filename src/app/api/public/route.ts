import {NextResponse} from "next/server";
import {getCandidates,getPublishedRecords} from "@/lib/data";
export const dynamic="force-dynamic";
export async function GET(){const [candidates,articles,factchecks]=await Promise.all([getCandidates(),getPublishedRecords("articles"),getPublishedRecords("factchecks")]);return NextResponse.json({candidates,articles,factchecks});}